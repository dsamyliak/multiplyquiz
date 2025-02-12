import { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Card, CardContent } from "../components/ui/card";

function MultiplicationQuiz() {
  const [num1, setNum1] = useState(generateNumber());
  const [num2, setNum2] = useState(generateNumber());
  const [userAnswer, setUserAnswer] = useState("");
  const [message, setMessage] = useState("");

  function generateNumber() {
    return Math.floor(Math.random() * 8) + 2;
  }

  function checkAnswer() {
    const correctAnswer = num1 * num2;
    if (parseInt(userAnswer) === correctAnswer) {
      setMessage("✅ Правильно!");
    } else {
      setMessage(`❌ Неправильно! Вірна відповідь: ${correctAnswer}`);
    }
    nextQuestion();
  }

  function nextQuestion() {
    setTimeout(() => {
      setNum1(generateNumber());
      setNum2(generateNumber());
      setUserAnswer("");
      setMessage("");
    }, 1500);
  }

  
    return (
      <Card className="p-4 text-center w-80 mx-auto mt-10">
        <CardContent>
          <h2 className="text-xl font-bold">Перевірка таблички множення</h2>
          <p className="text-lg mt-4">Скільки буде {num1} × {num2}?</p>
          <Input
            type="number"
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            className="mt-2 text-center"
          />
          <Button onClick={checkAnswer} className="mt-4">Перевірити</Button>
          <p className="mt-2 text-lg font-bold">{message}</p>
        </CardContent>
      </Card>
    );
};

export default MultiplicationQuiz;
// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
