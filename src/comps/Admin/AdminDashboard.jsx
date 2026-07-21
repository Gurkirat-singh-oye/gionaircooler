import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { supabase } from "../../supabaseClient";
import MultiImageUploader from "./ImageUploadComp";

function KeyBenefits(params) {
  const [prompt, setPrompt] = useState(false);
  const [newBenefit, setNewBenefit] = useState("");
  const [benefits, setBenefits] = useState([]);

  const saveBenefits = () => {

    let benefitAssembly = ""
    benefits?.forEach((each) => {
      benefitAssembly = benefitAssembly.concat(each?.label, ">", each?.value, "|")
    })
    params?.upspec("key_benefits", benefitAssembly)

  }

  return (
    <div className="flex flex-col gap-2">
      <div>Key Benefits</div>
      <div className=" grid grid-cols-1 lg:grid-cols-2 items-end gap-4 ">
        {benefits?.map((benefit) => (
          <div className="flex flex-col gap-2" key={benefit.label}>
            <label className="font-medium">{benefit.label}</label>
            <input
              className="px-3 py-2 border border-slate-300 rounded"
              type="text"
              placeholder="List use cases with comma separation"
              value={benefit.value}
              onChange={(e) =>
                setBenefits((prev) =>
                  prev.map((b) =>
                    b.label === benefit.label
                      ? { ...b, value: e.target.value }
                      : b,
                  ),
                )
              }
            />
          </div>
        ))}
        {prompt && (
          <div className=" fixed top-0 left-0 w-screen h-screen flex justify-center items-center gap-2 bg-neutral-700 bg-opacity-80 ">
            <div className=" relative px-20 py-5 flex flex-col gap-4 bg-gion-powder-blue rounded-lg ">
              <div>Name of the Benefit</div>
              <input
                className="px-3 py-2 border border-slate-300 rounded"
                type="text"
                placeholder="Thandi hawa temperature"
                value={newBenefit}
                onChange={(e) => setNewBenefit(e.target.value)}
              />
              <div
                onClick={() => {
                  benefits?.push({ label: newBenefit, value: "" });
                  setPrompt(false);
                }}
                className=" mx-auto px-8 py-2 bg-gion-teal-3 hover:bg-gion-seafoam-green text-gion-powder-blue rounded-lg cursor-pointer "
              >
                Add
              </div>
              <div
                className=" absolute right-2 bottom-0 cursor-pointer "
                onClick={() => setPrompt(false)}
              >
                close
              </div>
            </div>
          </div>
        )}
        <div
          onClick={() => setPrompt(true)}
          className=" w-full h-[42px] flex items-center justify-center text-neutral-600 border border-gion-teal-3 bg-gion-powder-blue rounded-sm cursor-pointer "
        >
          Add{" "}
        </div>
      </div>
      <div onClick={() => saveBenefits()} className=" px-10 py-3 w-fit bg-gion-teal-3 text-gion-powder-blue rounded-md " >Save Benefits</div>
    </div>
  );
}

function UploadProducts(params) {
  const [name, setName] = useState("");
  const [series, setSeries] = useState("");
  const [type, setType] = useState("");
  const [price, setPrice] = useState("");

  const [short_description, setShortDescription] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrls, setImageUrls] = useState([]);

  const [specs, setSpecs] = useState({
    supply_voltage: "",
    power_consumption: "",
    speed_levels: "",
    air_deflection: "",
    air_throw: "",
    air_delivery: "",
    motor_rpm: "",
    water_tank_capacity: "",
    cooling_media: "",
    dimensions: "",
    net_weight: "",
    gross_weight: "",
    metal_fan_blade: "",
    water_drain_plug: "",
    auto_fill_valve: "",
    fan_motor: "",
    ideal_for: "",
    key_benefits: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      name,
      series,
      type,
      price,
      short_description,
      description,
      ...specs,
      images: imageUrls,
    };
    console.log("product payload", payload);

    try {
      const { data, error } = await supabase.from("products").insert([payload]);
      if (error) throw error;
      console.log("Product added successfully:", data);
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  const updateSpec = (field, value) => {
    setSpecs((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="flex flex-col gap-6 items-center">
      <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full">
        <MultiImageUploader onUploadComplete={(urls) => setImageUrls(urls)} />
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          <input
            className="px-3 py-2 border border-slate-300 rounded"
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="px-3 py-2 border border-slate-300 rounded"
            type="text"
            placeholder="Series"
            value={series}
            onChange={(e) => setSeries(e.target.value)}
          />
          <input
            className="px-3 py-2 border border-slate-300 rounded"
            type="text"
            placeholder="Type"
            value={type}
            onChange={(e) => setType(e.target.value)}
          />
          <input
            className="px-3 py-2 border border-slate-300 rounded"
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="text-xl font-semibold">Description</div>
        <textarea
          className="px-3 py-2 border border-slate-300 rounded w-full"
          type="text"
          placeholder="short description"
          value={short_description}
          onChange={(e) => setShortDescription(e.target.value)}
        ></textarea>
        <textarea
          className="px-3 py-2 border border-slate-300 rounded w-full"
          type="text"
          placeholder="long description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>

        <div className="text-xl font-semibold">Technical Specification</div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <label className="font-medium">Supply Voltage</label>
            <input
              className="px-3 py-2 border border-slate-300 rounded"
              type="text"
              placeholder="e.g. 220V / 50Hz"
              value={specs.supply_voltage}
              onChange={(e) => updateSpec("supply_voltage", e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-medium">Power Consumption</label>
            <input
              className="px-3 py-2 border border-slate-300 rounded"
              type="text"
              placeholder="Wattage"
              value={specs.power_consumption}
              onChange={(e) => updateSpec("power_consumption", e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-medium">Speed Levels</label>
            <input
              className="px-3 py-2 border border-slate-300 rounded"
              type="number"
              placeholder="Number of speed settings"
              value={specs.speed_levels}
              onChange={(e) => updateSpec("speed_levels", e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-medium">Air Deflection</label>
            <input
              className="px-3 py-2 border border-slate-300 rounded"
              type="text"
              placeholder="e.g. Adjustable / Fixed"
              value={specs.air_deflection}
              onChange={(e) => updateSpec("air_deflection", e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-medium">Air Throw (ft)</label>
            <input
              className="px-3 py-2 border border-slate-300 rounded"
              type="text"
              placeholder="Air throw distance"
              value={specs.air_throw}
              onChange={(e) => updateSpec("air_throw", e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-medium">Air Delivery</label>
            <input
              className="px-3 py-2 border border-slate-300 rounded"
              type="text"
              placeholder="CFM / m³/hr"
              value={specs.air_delivery}
              onChange={(e) => updateSpec("air_delivery", e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-medium">Motor RPM</label>
            <input
              className="px-3 py-2 border border-slate-300 rounded"
              type="text"
              placeholder="Motor speed"
              value={specs.motor_rpm}
              onChange={(e) => updateSpec("motor_rpm", e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-medium">Water Tank Capacity</label>
            <input
              className="px-3 py-2 border border-slate-300 rounded"
              type="text"
              placeholder="e.g. 7 L"
              value={specs.water_tank_capacity}
              onChange={(e) =>
                updateSpec("water_tank_capacity", e.target.value)
              }
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-medium">Cooling Media</label>
            <input
              className="px-3 py-2 border border-slate-300 rounded"
              type="text"
              placeholder="e.g. Ice / Water"
              value={specs.cooling_media}
              onChange={(e) => updateSpec("cooling_media", e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-medium">
              Product Dimensions (L x W x H)
            </label>
            <input
              className="px-3 py-2 border border-slate-300 rounded"
              type="text"
              placeholder="e.g. 600 x 400 x 850 mm"
              value={specs.dimensions}
              onChange={(e) => updateSpec("dimensions", e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-medium">Net Weight</label>
            <input
              className="px-3 py-2 border border-slate-300 rounded"
              type="text"
              placeholder="e.g. 12 kg"
              value={specs.net_weight}
              onChange={(e) => updateSpec("net_weight", e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-medium">Gross Weight</label>
            <input
              className="px-3 py-2 border border-slate-300 rounded"
              type="text"
              placeholder="e.g. 15 kg"
              value={specs.gross_weight}
              onChange={(e) => updateSpec("gross_weight", e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-medium">Metal Fan Blade</label>
            <input
              className="px-3 py-2 border border-slate-300 rounded"
              type="text"
              placeholder="Yes / No"
              value={specs.metal_fan_blade}
              onChange={(e) => updateSpec("metal_fan_blade", e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-medium">Water Drain Plug</label>
            <input
              className="px-3 py-2 border border-slate-300 rounded"
              type="text"
              placeholder="Yes / No"
              value={specs.water_drain_plug}
              onChange={(e) => updateSpec("water_drain_plug", e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-medium">Auto Fill Valve</label>
            <input
              className="px-3 py-2 border border-slate-300 rounded"
              type="text"
              placeholder="Yes / No"
              value={specs.auto_fill_valve}
              onChange={(e) => updateSpec("auto_fill_valve", e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-medium">Fan Motor</label>
            <input
              className="px-3 py-2 border border-slate-300 rounded"
              type="text"
              placeholder="e.g. BLDC / Induction"
              value={specs.fan_motor}
              onChange={(e) => updateSpec("fan_motor", e.target.value)}
            />
          </div>
        </div>

        <KeyBenefits upspec={updateSpec} />

        <div className="flex flex-col gap-2">
          <label className="font-medium">Ideal For</label>
          <input
            className="px-3 py-2 border border-slate-300 rounded"
            type="text"
            placeholder="List use cases with comma separation"
            value={specs.ideal_for}
            onChange={(e) => updateSpec("ideal_for", e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="px-5 py-3 bg-gion-teal-3 text-white rounded font-semibold hover:bg-gion-teal-2 transition"
        >
          Save Product
        </button>
      </form>
    </div>
  );
}

function AdminDashboard(params) {
  const [selectedPage, setSelectedPage] = useState("");

  return (
    <div className=" w-full flex flex-row ">
      <div
        id="#panel"
        className=" fixed left-0 px-4 py-3 w-80 h-screen flex flex-col gap-4 text-xl text-gion-powder-blue font-poppins bg-gion-teal-3 uppercase "
      >
        <div className=" py-6 text-2xl text-center "> dashboard </div>
        <div
          className=" hover:text-[22px] transition-all duration-200 cursor-pointer "
          onClick={() => setSelectedPage("upload_products")}
        >
          upload products
        </div>
        <Link
          className=" hover:text-[22px] transition-all duration-200 cursor-pointer "
          to="/"
        >
          Gion Home
        </Link>
      </div>
      <div className="ml-80 flex flex-col flex-grow bg-gion-teal-blue ">
        <div className=" fixed top-0 px-8 w-full h-20 flex items-center text-3xl text-gion-teal-3 font-poppins font-semibold bg-gion-powder-blue ">
          {selectedPage == "upload_products"
            ? "Upload Products"
            : "Default Title"}
        </div>

        <div className=" mt-20 px-8 py-7 ">
          {(() => {
            switch (selectedPage) {
              case "upload_products":
                return <UploadProducts />;
                break;

              default:
                break;
            }
          })()}
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
