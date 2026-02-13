interface TeachingReceiptProps {
  mastered: string[];
  selfCheckQuestions: string[];
  checkedQuestions: number[];
  onQuestionToggle: (index: number) => void;
}

export default function TeachingReceipt({ 
  mastered, 
  selfCheckQuestions, 
  checkedQuestions, 
  onQuestionToggle 
}: TeachingReceiptProps) {
  const allChecked = selfCheckQuestions.length > 0 && checkedQuestions.length === selfCheckQuestions.length;

  return (
    <div className="bg-gradient-to-br from-green-50 to-blue-50 border-2 border-green-300 rounded-lg p-8 mb-8 shadow-lg">
      <div className="flex items-start gap-3 mb-6">
        <span className="text-4xl">🎓</span>
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Teaching Receipt</h2>
          <p className="text-gray-700 text-sm">
            You've completed the core sections! Here's what you now understand:
          </p>
        </div>
      </div>

      <div className="bg-white rounded-lg p-6 mb-6">
        <h3 className="font-semibold text-lg text-gray-900 mb-4">What You Now Understand:</h3>
        <ul className="space-y-3">
          {mastered.map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="text-green-600 text-xl flex-shrink-0">✓</span>
              <span className="text-gray-700">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-white rounded-lg p-6">
        <h3 className="font-semibold text-lg text-gray-900 mb-4">
          Self-Check: Can You Explain This?
        </h3>
        <p className="text-sm text-gray-600 mb-4">
          Check off the questions you feel confident explaining to someone else:
        </p>
        <div className="space-y-3">
          {selfCheckQuestions.map((question, index) => (
            <label key={index} className="flex items-start gap-3 cursor-pointer group">
              <input
                type="checkbox"
                checked={checkedQuestions.includes(index)}
                onChange={() => onQuestionToggle(index)}
                className="mt-1 w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 cursor-pointer"
              />
              <span className="text-gray-700 group-hover:text-gray-900 transition-colors">
                {question}
              </span>
            </label>
          ))}
        </div>

        {!allChecked && selfCheckQuestions.length > 0 && (
          <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-sm text-blue-900">
              <strong>Not quite there yet?</strong> That's completely normal! Review the sections where you're 
              less confident, or move on and circle back later. Understanding builds over time.
            </p>
          </div>
        )}

        {allChecked && (
          <div className="mt-6 bg-green-50 border border-green-200 rounded-lg p-4">
            <p className="text-sm text-green-900 font-medium">
              🎉 Excellent! You've mastered this module. Ready for the Deep Dive?
            </p>
          </div>
        )}
      </div>
    </div>
  );
}