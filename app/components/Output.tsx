"use client ";
import React, { useState } from "react";
import Split from "react-split";
import CodeMirror from "@uiw/react-codemirror";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";
import { javascript } from "@codemirror/lang-javascript";
import { useRecoilValue } from "recoil";
import { outputState } from "../store/atoms/output";

const Output = () => {
  const output = useRecoilValue(outputState);
  return (
    <>
      <div className="flex flex-col relative">
        <Split
          className="h-screen"
          direction="vertical"
          sizes={[60, 40]}
          minSize={60}
        >
          <div className="w-full overflow-auto custom-scrollbar">
            <div className="p-2">
              <strong>Output:</strong>
              <CodeMirror
                value={output.output ?? ""}
                theme={vscodeDark}
                extensions={[javascript()]}
                style={{ fontSize: 16 }}
                readOnly
              />
            </div>
          </div>
          <div className="w-full flex flex-col p-2 overflow-auto custom-scrollbar">
            <div className="">
              <strong>Console:</strong>
              <CodeMirror
                value={output.console ?? ""}
                theme={vscodeDark}
                extensions={[javascript()]}
                style={{ fontSize: 16 }}
                readOnly
              />
            </div>
          </div>
        </Split>
      </div>
    </>
  );
};

export default Output;
