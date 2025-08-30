import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { questions, calculatePokemonMatch, type Question, type Answer } from "@/data/pokemon";
import { QuizQuestion } from "./QuizQuestion";
import { QuizResults } from "./QuizResults";

export const PokemonQuiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState<number>(0);
    const [answers, setAnswers] = useState<string[]>([]);
    const [showResults, setShowResults] = useState<boolean>(false);
    const [isStarted, setIsStarted] = useState<boolean>(false);

    const handleAnswer = (answer: Answer) => {
        const newAnswers = [...answers, ...answer.traits];
        setAnswers(newAnswers);

        if (currentQuestion + 1 >= questions.length) {
            setShowResults(true);
        } else {
            setCurrentQuestion(prev => prev + 1);
        }
    };

    const resetQuiz = () => {
        setCurrentQuestion(0);
        setAnswers([]);
        setShowResults(false);
        setIsStarted(false);
    };

    const startQuiz = () => {
        setIsStarted(true);
    };

    if (showResults) {
        const result = calculatePokemonMatch(answers);
        return <QuizResults pokemon={result} onRestart={resetQuiz} />;
    }

    if (!isStarted) {
        return (
            <div className="min-h-screen bg-gradient-hero flex items-center justify-center p-4">
                <Card className="w-full max-w-2xl shadow-glow border-0">
                    <CardContent className="p-12 text-center">
                        <div className="space-y-6">
                            <h1 className="text-5xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                                Which Gen 1 Pokémon Are You?
                            </h1>
                            <p className="text-xl text-muted-foreground leading-relaxed">
                                Discover your inner Pokémon! Answer 6 questions about your personality
                                and we'll reveal which of the original 151 Pokémon matches your spirit.
                            </p>
                            <div className="pt-6">
                                <Button
                                    onClick={startQuiz}
                                    size="lg"
                                    variant="hero"
                                    className="transform transition-all duration-300 hover:scale-105"
                                >
                                    Start Quiz ⚡
                                </Button>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-hero flex items-center justify-center p-4">
            <div className="w-full max-w-2xl">
                <QuizQuestion
                    question={questions[currentQuestion]}
                    onAnswer={handleAnswer}
                    questionNumber={currentQuestion + 1}
                    totalQuestions={questions.length}
                />
            </div>
        </div>
    );
};