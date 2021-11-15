import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
  test("status from state should be in the state", () => {
    const component = create(<ProfileStatus status="ITKamasutra" />);
    const instance = component.getInstance();
    expect(instance.state.status).toBe("ITKamasutra");
  });

  test("after creation <div> with status should be displayed with correct status", () => {
    const component = create(<ProfileStatus status="ITKamasutra" />);
    const root = component.root;
    let div = root.findByType("div");
    expect(div.children.length).not.toBeNull();
  });
  
  test("after creation <input> should'n be displayed", () => {
    const component = create(<ProfileStatus status="ITKamasutra" />);
    const root = component.root;
    expect(() => {
        let input = root.findByType("input");
    }).toThrow();
  });
  
  test("callback should be called", () => {
    const mockCallback = jest.fn();
    const component = create(<ProfileStatus status="ITKamasutra" updateStatus={mockCallback} />);
    const instance = component.getInstance();
    instance.deactivatedEditMode();
    expect(mockCallback.mock.calls.length).toBe(1);
  });
});