import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { Upload, Download, Link, Play } from "lucide-react";
import { toast } from "sonner";

const VideoConverter = () => {
  const [url, setUrl] = useState("");
  const [format, setFormat] = useState("");
  const [isDragging, setIsDragging] = useState(false);

  const handleUrlSubmit = () => {
    if (!url || !format) {
      toast.error("Please enter a URL and select a format");
      return;
    }
    toast.info("Video conversion will be available once backend is connected!");
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    toast.info("File upload will be available once backend is connected!");
  };

  return (
    <Card className={`cyber-border p-8 space-y-6 ${isDragging ? 'neon-glow' : ''}`}>
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold text-primary">Video Converter</h2>
        <p className="text-muted-foreground">Download and convert videos from any platform</p>
      </div>

      {/* URL Input Section */}
      <div className="space-y-4">
        <Label htmlFor="video-url" className="text-sm font-medium">
          Video URL
        </Label>
        <div className="flex gap-2">
          <div className="relative flex-1">
            <Link className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              id="video-url"
              placeholder="https://youtube.com/watch?v=..."
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="pl-10 bg-input border-border focus:border-primary transition-colors"
            />
          </div>
          <Select value={format} onValueChange={setFormat}>
            <SelectTrigger className="w-32 bg-input border-border">
              <SelectValue placeholder="Format" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="mp4">MP4</SelectItem>
              <SelectItem value="mp3">MP3</SelectItem>
              <SelectItem value="wav">WAV</SelectItem>
              <SelectItem value="flac">FLAC</SelectItem>
              <SelectItem value="webm">WebM</SelectItem>
            </SelectContent>
          </Select>
          <Button onClick={handleUrlSubmit} className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Download className="h-4 w-4 mr-2" />
            Convert
          </Button>
        </div>
      </div>

      {/* Drag & Drop Section */}
      <div className="relative">
        <div className="text-center text-muted-foreground text-sm mb-2">OR</div>
        <div
          className={`border-2 border-dashed rounded-lg p-8 text-center transition-all duration-300 scanline ${
            isDragging 
              ? 'border-primary bg-primary/5' 
              : 'border-border hover:border-primary/50 hover:bg-primary/5'
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <Upload className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
          <p className="text-lg font-medium text-foreground mb-2">
            Drop your video files here
          </p>
          <p className="text-sm text-muted-foreground">
            Supports MP4, AVI, MOV, MKV and more
          </p>
          <Button 
            variant="outline" 
            className="mt-4 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            Choose Files
          </Button>
        </div>
      </div>

      {/* Supported Platforms */}
      <div className="bg-muted/20 rounded-lg p-4">
        <h3 className="text-sm font-medium text-foreground mb-2">Supported Platforms</h3>
        <div className="flex flex-wrap gap-2 text-xs">
          {["YouTube", "TikTok", "Instagram", "Twitter", "Facebook", "Vimeo", "Dailymotion"].map((platform) => (
            <span key={platform} className="bg-secondary/50 px-2 py-1 rounded text-secondary-foreground">
              {platform}
            </span>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default VideoConverter;