import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const tutorialSteps = [
  {
    title: "Welcome to ConnectED!",
    description: "Let's take a quick tour to help you get started.",
  },
  {
    title: "Find Opportunities",
    description: "Search for internships, mentors, and learning resources all in one place.",
  },
  {
    title: "Connect with Mentors",
    description: "Get guidance from industry professionals who can help shape your career.",
  },
  {
    title: "Track Your Progress",
    description: "Monitor your applications, learning journey, and career development.",
  },
];

export const OnboardingTutorial = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const { toast } = useToast();

  useEffect(() => {
    const hasSeenTutorial = localStorage.getItem("hasSeenTutorial");
    if (!hasSeenTutorial) {
      setIsOpen(true);
    }
  }, []);

  const handleNext = () => {
    if (currentStep < tutorialSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsOpen(false);
      localStorage.setItem("hasSeenTutorial", "true");
      toast({
        title: "Tutorial completed!",
        description: "You can always revisit the tutorial from the help menu.",
      });
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{tutorialSteps[currentStep].title}</DialogTitle>
          <DialogDescription>{tutorialSteps[currentStep].description}</DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex justify-between items-center">
          <div className="text-sm text-muted-foreground">
            Step {currentStep + 1} of {tutorialSteps.length}
          </div>
          <Button onClick={handleNext}>
            {currentStep === tutorialSteps.length - 1 ? "Get Started" : "Next"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};