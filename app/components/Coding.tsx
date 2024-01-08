"use client";

import CodeMirror from "@uiw/react-codemirror";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";
import { javascript } from "@codemirror/lang-javascript";
import { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import { outputState } from "../store/atoms/output";

export default function Coding() {
  const [code, setCode] = useState("");
  const [consoleOutput, setConsoleOutput] = useState<string | null>(null);
  const [output, setOutput] = useState<string | null>(null);
  const setOutputValue = useSetRecoilState(outputState);

  const handleCodeChange = (value: any) => {
    setCode(value);
  };

  const handleRun = () => {
    try {
      let consoleMessages: any = [];
      const originalConsoleLog = console.log;
      console.log = (...args) => {
        consoleMessages.push(args);
        originalConsoleLog(...args);
      };
      const result = eval(code);
      console.log = originalConsoleLog;
      setOutput(
        result !== undefined ? result.toString() : ""
      );
      setConsoleOutput(
        consoleMessages.map((msg: any) => msg.join(" ")).join("\n")
      );
    } catch (error) {
      console.error("Execution error:", error);
      setOutput(`Error: ${error}`);
    }
  };

  useEffect(() => {
    setOutputValue({
      output: output,
      console: consoleOutput,
    });
  }, [output, consoleOutput, setOutputValue]);

  return (
    <>
      <div className="h-screen overflow-auto relative custom-scrollbar">
      <div className="sticky top-0 bg-gray-900 z-10">
        <div className="flex justify-between p-4 items-center">
          <strong className="text-lg text-white">Coding</strong>
          <div className="flex items-center space-x-4">
            <div
              className="cursor-pointer p-2 bg-green-600 rounded-lg"
              onClick={handleRun}
            >
              Run
            </div>
          </div>
        </div>
      </div>
      <div className="w-full overflow-auto">
        <CodeMirror
          value={code}
          theme={vscodeDark}
          extensions={[javascript()]}
          style={{ fontSize: 16 }}
          onChange={handleCodeChange}
        />
      </div>
    </div>
    </>
  );
}
