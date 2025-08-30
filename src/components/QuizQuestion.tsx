import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { type Question, type Answer } from "@/data/pokemon";

interface QuizQuestionProps {
  question: Question;
  onAnswer: (answer: Answer) => void;
  questionNumber: number;
  totalQuestions: number;
}

export const QuizQuestion = ({ question, onAnswer, questionNumber, totalQuestions }: QuizQuestionProps) => {
  const progress = (questionNumber / totalQuestions) * 100;

  return (
    <Card className="shadow-glow border-0 animate-in slide-in-from-bottom-4 duration-500">
      <CardHeader className="pb-4">
        <div className="space-y-4">
          <div className="flex justify-between items-center text-sm text-muted-foreground">
            <span>Question {questionNumber} of {totalQuestions}</span>
            <span>{Math.round(progress)}% Complete</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
        <CardTitle className="text-2xl leading-relaxed pt-2">
          {question.question}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-3">
          {question.answers.map((answer, index) => (
            <Button
              key={index}
              variant="quiz"
              size="lg"
              onClick={() => onAnswer(answer)}
              className="h-auto py-4 px-6 text-left justify-start transform transition-all duration-200 hover:scale-[1.02]"
            >
              <span className="leading-relaxed">{answer.text}</span>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};