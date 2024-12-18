import React, { useEffect, useState } from 'react';
import { getAllProgrammingQues } from '../services/operations/programmingAPI';
import { useNavigate } from 'react-router-dom';

function ProgrammingQues() {
  const [questions, setQuestions] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchQuestions = async () => {
      const result = await getAllProgrammingQues();
      setQuestions(result);
    };
    fetchQuestions();
  }, []);

  const solveQuestion = (questionId) => {
    navigate(`/programming-questions/${questionId}`);
  };

  return (
    <div className="container mx-auto p-4">
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 p-2 text-left">SR NO.</th>
            <th className="border border-gray-300 p-2 text-left">TITLE</th>
            <th className="border border-gray-300 p-2 text-left">DIFFICULTY</th>
            <th className="border border-gray-300 p-2 text-left">ACTION</th>
          </tr>
        </thead>
        <tbody>
          {questions.map((question, index) => (
            <tr key={question._id} className="hover:bg-gray-50 cursor-pointer" onClick={() => {solveQuestion(question._id)}}>
              <td className="border border-gray-300 p-2">{index + 1}</td>
              <td className="border border-gray-300 p-2" >{question.title}</td>
              <td className={`border border-gray-300 p-2 ${
                question.difficultyLevel === 'Hard' ? ' text-red-600' :
                question.difficultyLevel === 'Medium' ? ' text-yellow-600' :
                'text-emerald-600'
              }`}>
                {question.difficultyLevel}
              </td>
              <td className="border border-gray-300 p-2">
                <button 
                  className="bg-gray-200 hover:bg-gray-300 px-4 py-1 rounded"
                  onClick={() => {solveQuestion(question._id)}}
                >
                  Solve
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProgrammingQues;
