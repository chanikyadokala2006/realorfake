import { useState, useRef, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const Hero = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [result, setResult] = useState(null);
  const fileInputRef = useRef(null);
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let interval;
    if (result) {
      const text = `>  Analysis complete.\n> Result: ${result.result}\n> Confidence: ${(result.probability * 100).toFixed(1)}%`;
      let i = 0;
      setDisplayText("");
      interval = setInterval(() => {
        if (i < text.length) {
          setDisplayText((prev) => prev + text.charAt(i));
          i++;
        } else {
          clearInterval(interval);
        }
      }, 30);
    }
    return () => clearInterval(interval);
  }, [result]);

  const handleFileChange = async (event) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
      setIsLoading(true);
      setError(null);
      setResult(null);

      try {
        const formData = new FormData();
        formData.append("image", file);

        const response = await fetch("https://realorfake-501456592810.asia-south1.run.app/predict", {
          method: "POST",
          body: formData,
        });

        const data = await response.json();
        setResult(data);
        setSelectedImage(null);
      } catch (err) {
        setError("Something went wrong. Please try again.");
        toast.error("Something went wrong. Please try again.");
      } finally {
        setIsLoading(false);
      }
    }
  };

  const triggerUpload = () => {
    fileInputRef.current?.click();
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 md:px-6 pt-20 pb-8 bg-background">
      <div className="w-full max-w-4xl flex flex-col items-center">

        <div className="text-center mb-8 md:mb-16 space-y-3 md:space-y-4">
          <span className="text-[0.6875rem] uppercase tracking-widest font-bold text-on-surface-variant">
            Technical Editorial Interface
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-on-surface leading-none">
            Real or AI
          </h1>
          <p className="text-on-surface-variant max-w-lg mx-auto leading-relaxed text-sm md:text-base">
            Upload an image to find out if it is real or AI-generated.
          </p>
        </div>

        <div className="w-full grid grid-cols-1 gap-6 md:gap-8">
          <div
            onClick={triggerUpload}
            className="group relative w-full min-h-[200px] md:aspect-[21/9] bg-surface-container-low rounded-xl flex flex-col items-center justify-center cursor-pointer transition-all duration-500 hover:bg-surface-container-high border-2 border-dashed border-outline-variant/30 hover:border-outline/50 overflow-hidden"
          >
            <Input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              className="hidden"
              accept="image/*"
            />

            {selectedImage && !result && !error ? (
              <img
                src={selectedImage}
                alt="Upload preview"
                className="w-full h-full object-contain p-4 transition-opacity duration-500"
              />
            ) : (
              <div className="flex flex-col items-center space-y-4 md:space-y-6 text-center transition-transform duration-500 group-hover:-translate-y-2 p-6">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-surface-container-lowest rounded-full flex items-center justify-center shadow-[0_20px_40px_-10px_rgba(17,48,105,0.06)]">
                  <span className="material-symbols-outlined text-3xl md:text-4xl text-primary">cloud_upload</span>
                </div>
                <div>
                  <p className="text-lg md:text-xl font-bold tracking-tight text-on-surface">Drop image to initiate analysis</p>
                  <p className="text-on-surface-variant text-xs md:text-sm mt-1">Supports JPEG, PNG, and WEBP</p>
                </div>
              </div>
            )}
          </div>

          <div className="w-full bg-surface-container-lowest rounded-xl p-4 md:p-8 shadow-[0_20px_40px_-10px_rgba(17,48,105,0.03)] border-l-4 border-primary border">
            <div className="flex items-start space-x-4 md:space-x-6">
              <div className="shrink-0 pt-1">
                <span
                  className="material-symbols-outlined text-primary"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  terminal
                </span>
              </div>
              <div className="flex-1 space-y-3 md:space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-[0.6875rem] uppercase tracking-widest font-bold text-on-surface-variant">System Response</h3>
                  <span className="px-2 py-0.5 bg-surface-container-high rounded text-[0.6rem] font-bold text-on-surface uppercase tracking-tighter">
                    Status: {result ? "200 OK" : isLoading ? "PROCESSING" : "IDLE"}
                  </span>
                </div>
                <div className="bg-surface-container-highest rounded-lg p-4 md:p-6 font-mono text-sm leading-relaxed text-on-tertiary-fixed-variant">
                  {result ? (
                    <pre className="whitespace-pre-wrap">
                      {displayText}
                      <span className="animate-pulse"></span>
                    </pre>
                  ) : isLoading ? (
                    <p className="text-on-surface font-semibold">Processing image...</p>
                  ) : (
                    <p className="italic opacity-60">&gt;&nbsp;Awaiting input...</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;