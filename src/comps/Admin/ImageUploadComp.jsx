import { useState } from 'react';
import { supabase } from '../../supabaseClient';

function MultiImageUploader({ onUploadComplete }) {
  const [files, setFiles] = useState([]);
  const [previews, setPreviews] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');

  const handleFileChange = (e) => {
    const selected = Array.from(e.target.files);
    setFiles(selected);
    setPreviews(selected.map((f) => URL.createObjectURL(f)));
  };

  const handleUpload = async () => {
    if (files.length === 0) return;
    setUploading(true);
    setError('');

    try {
      const uploadedUrls = await Promise.all(
        files.map(async (file) => {
          const fileExt = file.name.split('.').pop();
          const fileName = `${crypto.randomUUID()}.${fileExt}`;
          const filePath = `products/${fileName}`;

          const { error: uploadError } = await supabase.storage
            .from('product-images')
            .upload(filePath, file);

          if (uploadError) throw uploadError;

          const { data } = supabase.storage
            .from('product-images')
            .getPublicUrl(filePath);

          return data.publicUrl;
        })
      );

      onUploadComplete(uploadedUrls); // array of URLs
    } catch (err) {
      setError(err.message);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div>
        <div>Product images</div>
      <input type="file"  accept="image/*" multiple onChange={handleFileChange} className=' p-4 rounded-lg bg-neutral-100 cursor-pointer ' />
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        {previews.map((url, i) => (
          <img key={i} src={url} alt={`preview-${i}`} style={{ width: 100 }} />
        ))}
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button onClick={handleUpload} disabled={files.length === 0 || uploading} className=' px-4 py-3 text-gion-powder-blue rounded-lg bg-gion-teal-3 ' >
        {uploading ? 'Uploading...' : `Upload`}
      </button>
    </div>
  );
}

export default MultiImageUploader;