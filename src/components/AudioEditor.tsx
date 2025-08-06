import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Play, Pause, SkipBack, SkipForward, Upload, Download, Scissors } from "lucide-react";
import { toast } from "sonner";

const AudioEditor = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState([1]);
  const [pitch, setPitch] = useState([0]);
  const [startTime, setStartTime] = useState("0:00");
  const [endTime, setEndTime] = useState("3:45");
  const [volume, setVolume] = useState([80]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
    toast.info("Audio playback will be available once backend is connected!");
  };

  const handleExport = () => {
    toast.info("Audio export will be available once backend is connected!");
  };

  return (
    <Card className="cyber-border p-8 space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold text-accent">Audio Editor</h2>
        <p className="text-muted-foreground">Edit speed, pitch, and trim your audio files</p>
      </div>

      {/* File Upload */}
      <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-accent/50 transition-colors">
        <Upload className="mx-auto h-8 w-8 text-muted-foreground mb-2" />
        <p className="text-sm text-muted-foreground mb-2">Upload an audio file to start editing</p>
        <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
          Choose Audio File
        </Button>
      </div>

      {/* Waveform Placeholder */}
      <div className="bg-muted/10 rounded-lg p-6 scanline">
        <div className="h-24 bg-gradient-to-r from-accent/20 via-primary/30 to-accent/20 rounded flex items-center justify-center">
          <div className="text-center">
            <div className="h-1 w-64 bg-accent/50 rounded mb-2"></div>
            <div className="h-2 w-48 bg-primary/60 rounded mb-2"></div>
            <div className="h-1 w-56 bg-accent/40 rounded"></div>
          </div>
        </div>
      </div>

      {/* Playback Controls */}
      <div className="flex items-center justify-center gap-4">
        <Button variant="outline" size="icon" className="border-primary">
          <SkipBack className="h-4 w-4" />
        </Button>
        <Button 
          onClick={handlePlayPause}
          className="bg-primary hover:bg-primary/90 text-primary-foreground"
          size="icon"
        >
          {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
        </Button>
        <Button variant="outline" size="icon" className="border-primary">
          <SkipForward className="h-4 w-4" />
        </Button>
      </div>

      {/* Audio Controls */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Speed Control */}
        <div className="space-y-3">
          <Label className="text-sm font-medium">Speed: {speed[0]}x</Label>
          <Slider
            value={speed}
            onValueChange={setSpeed}
            max={3}
            min={0.25}
            step={0.25}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>0.25x</span>
            <span>3x</span>
          </div>
        </div>

        {/* Pitch Control */}
        <div className="space-y-3">
          <Label className="text-sm font-medium">Pitch: {pitch[0] > 0 ? '+' : ''}{pitch[0]} semitones</Label>
          <Slider
            value={pitch}
            onValueChange={setPitch}
            max={12}
            min={-12}
            step={1}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>-12</span>
            <span>+12</span>
          </div>
        </div>

        {/* Volume Control */}
        <div className="space-y-3">
          <Label className="text-sm font-medium">Volume: {volume[0]}%</Label>
          <Slider
            value={volume}
            onValueChange={setVolume}
            max={150}
            min={0}
            step={5}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>0%</span>
            <span>150%</span>
          </div>
        </div>

        {/* Trim Controls */}
        <div className="space-y-3">
          <Label className="text-sm font-medium flex items-center gap-2">
            <Scissors className="h-4 w-4" />
            Trim Audio
          </Label>
          <div className="flex gap-2">
            <div className="flex-1">
              <Label className="text-xs text-muted-foreground">Start</Label>
              <Input
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
                placeholder="0:00"
                className="bg-input border-border"
              />
            </div>
            <div className="flex-1">
              <Label className="text-xs text-muted-foreground">End</Label>
              <Input
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
                placeholder="3:45"
                className="bg-input border-border"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Export Options */}
      <div className="border-t border-border pt-6">
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
          <div className="text-sm text-muted-foreground">
            Ready to export your edited audio?
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
              Preview Changes
            </Button>
            <Button 
              onClick={handleExport}
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              <Download className="h-4 w-4 mr-2" />
              Export Audio
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default AudioEditor;