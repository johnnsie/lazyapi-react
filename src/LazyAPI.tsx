import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

interface QueryExample {
  title: string;
  query: string;
}

const queryExamples: QueryExample[] = [
  { title: 'Child Text', query: '{"values" : "my friends name is john and i forgot his last name, and he was born on march 2nd 1990. i have just remembered his family name was levinson."}' },
  { title: 'Query', query: '{"name" : "johnny","birthday": " 12 feb 1990","family" : "something"}' },
  { title: 'Query Two', query: '{"data":  { "name" : "johnny","birthday": "12 feb ninety-two", "last": "smith" }}' },
  { title: 'Elegant Text', query: '{"something": "My name is John Smith, born on July 15th, 1989."}' },
  { title: 'Inversed Values', query: '{ "data": { "birth": "johnny", "name": "12 feb ninety-two", "last": "smith" } }' },
];

const LazyAPI: React.FC = () => {
  const [request, setRequest] = useState('');
  const [response, setResponse] = useState('');

  const handleExampleClick = (query: string) => {
    try {
      const parsed = JSON.parse(query);
      const formattedJson = JSON.stringify(parsed, null, 2); // 2-space indentation
      setRequest(formattedJson);
    } catch {
      setRequest(query); // fallback if not valid JSON
    }
  };
  

  const makeApiCall = async () => {
    try {
      const jsonContent = JSON.parse(request);
      const res = await fetch('http://localhost:5022/api/parse', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(jsonContent),
      });
      const data = await res.json();
      setResponse(JSON.stringify(data, null, 2));
    } catch (error: any) {
      setResponse(`Error: ${error.message}`);
    }
  };

  return (
    <div className="w-screen bg-gray-900 h-screen text-white p-6 overflow-auto">
      <div className="w-full max-w-md mx-auto bg-gray-700 rounded-xl shadow-md p-4 mb-6">
        <h2 className="text-xl font-semibold mb-4">Examples</h2>
        <ul>
          {queryExamples.map((example, idx) => (
            <li key={idx}>
              <Button
                variant="secondary"
                className="w-full text-white my-2 bg-gray-600 hover:bg-gray-500"
                onClick={() => handleExampleClick(example.query)}
              >
                {example.title}
              </Button>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex justify-center items-center gap-4">
        <div className="w-full max-w-xl">
          <h2 className="text-xl font-semibold mb-2">Request</h2>
          <Textarea
            className="bg-gray-700 text-white rounded-xl shadow-sm h-64"
            value={request}
            onChange={(e) => setRequest(e.target.value)}
          />
          <Button className="mt-2 w-full bg-blue-600 hover:bg-blue-500" onClick={makeApiCall}>
            Execute
          </Button>
        </div>

        <div className="w-full max-w-xl">
          <h2 className="text-xl font-semibold mb-2">Response</h2>
          <Textarea
            className="bg-gray-700 text-white rounded-xl shadow-sm h-64"
            value={response}
            readOnly
          />
        </div>
      </div>
    </div>
  );
};

export default LazyAPI;
