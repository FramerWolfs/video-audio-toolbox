import { useState } from "react";
import GlitchText from "@/components/GlitchText";
import VideoConverter from "@/components/VideoConverter";
import AudioEditor from "@/components/AudioEditor";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Zap, Video, Music, Github, Twitter } from "lucide-react";
import logo from "@/assets/logo.png";

const Index = () => {
  const [activeTab, setActiveTab] = useState<'video' | 'audio'>('video');

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Framer's Workshop" className="w-10 h-10 animate-glow-pulse" />
              <div>
                <GlitchText className="text-xl font-bold">Framer's Workshop</GlitchText>
                <Badge variant="outline" className="ml-2 text-xs border-primary text-primary">
                  <Zap className="w-3 h-3 mr-1" />
                  Beta
                </Badge>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" className="hover:bg-primary/10">
                <Github className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-primary/10">
                <Twitter className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center space-y-8">
          <div className="space-y-4 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <GlitchText>Framer's Workshop</GlitchText>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Convert videos from any platform and edit audio with precision. 
              Your all-in-one media processing powerhouse.
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center gap-2 animate-slide-up">
            <Button
              onClick={() => setActiveTab('video')}
              variant={activeTab === 'video' ? 'default' : 'outline'}
              className={`${
                activeTab === 'video' 
                  ? 'bg-primary text-primary-foreground' 
                  : 'border-primary text-primary hover:bg-primary hover:text-primary-foreground'
              } transition-all duration-300`}
            >
              <Video className="w-4 h-4 mr-2" />
              Video Converter
            </Button>
            <Button
              onClick={() => setActiveTab('audio')}
              variant={activeTab === 'audio' ? 'default' : 'outline'}
              className={`${
                activeTab === 'audio' 
                  ? 'bg-accent text-accent-foreground' 
                  : 'border-accent text-accent hover:bg-accent hover:text-accent-foreground'
              } transition-all duration-300`}
            >
              <Music className="w-4 h-4 mr-2" />
              Audio Editor
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="animate-slide-up">
            {activeTab === 'video' ? <VideoConverter /> : <AudioEditor />}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            <GlitchText>Powerful Features</GlitchText>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Video,
                title: "Multi-Platform Support",
                description: "Download videos from YouTube, TikTok, Instagram, and more",
                color: "text-primary"
              },
              {
                icon: Music,
                title: "Advanced Audio Editing",
                description: "Control speed, pitch, volume, and trim with precision",
                color: "text-accent"
              },
              {
                icon: Zap,
                title: "Lightning Fast",
                description: "High-performance processing with real-time preview",
                color: "text-primary"
              }
            ].map((feature, index) => (
              <div 
                key={index} 
                className="cyber-border p-6 text-center space-y-4 animate-float"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <feature.icon className={`w-12 h-12 mx-auto ${feature.color}`} />
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border mt-20 py-8 px-4">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>© 2024 Framer's Workshop. Built with passion for creators.</p>
          <p className="text-sm mt-2">
            Connect to Supabase to unlock full functionality
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
