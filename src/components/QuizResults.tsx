import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { type Pokemon } from "@/data/pokemon";
import { useEffect, useState } from "react";

interface QuizResultsProps {
  pokemon: Pokemon;
  onRestart: () => void;
}

export const QuizResults = ({ pokemon, onRestart }: QuizResultsProps) => {
  const [imageUrl, setImageUrl] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Use the official Pokemon sprite API for authentic images
    const spriteUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`;
    
    // Preload the image
    const img = new Image();
    img.onload = () => {
      setImageUrl(spriteUrl);
      setIsLoading(false);
    };
    img.onerror = () => {
      // Fallback to a placeholder if the image fails to load
      setImageUrl(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`);
      setIsLoading(false);
    };
    img.src = spriteUrl;
  }, [pokemon.id]);

  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl shadow-glow border-0 animate-in zoom-in-50 duration-700">
        <CardHeader className="text-center pb-6">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-foreground">Your Result</h2>
            <div className="mx-auto w-48 h-48 bg-gradient-to-br from-muted/30 to-muted/10 rounded-full flex items-center justify-center border-4 border-primary/20">
              {isLoading ? (
                <div className="w-24 h-24 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <img
                  src={imageUrl}
                  alt={pokemon.name}
                  className="w-40 h-40 object-contain drop-shadow-lg animate-in zoom-in-50 duration-500 delay-200"
                />
              )}
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="space-y-6 text-center">
          <div className="space-y-3">
            <h1 className="text-4xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              {pokemon.name}
            </h1>
            <Badge variant="secondary" className="text-lg px-4 py-2">
              {pokemon.type}
            </Badge>
          </div>
          
          <div className="bg-muted/30 rounded-xl p-6 border border-border/50">
            <h3 className="text-xl font-semibold mb-3 text-foreground">Fun Fact</h3>
            <p className="text-muted-foreground leading-relaxed">
              {pokemon.funFact}
            </p>
          </div>
          
          <div className="flex flex-wrap gap-2 justify-center">
            {pokemon.traits.map((trait, index) => (
              <Badge key={index} variant="outline" className="capitalize">
                {trait}
              </Badge>
            ))}
          </div>
          
          <div className="pt-4 space-y-4">
            <Button 
              onClick={onRestart}
              variant="hero"
              size="lg"
              className="transform transition-all duration-300 hover:scale-105"
            >
              Take Quiz Again ✨
            </Button>
            <p className="text-sm text-muted-foreground">
              Share your result with friends and see which Pokémon they get!
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};