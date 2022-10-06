import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
    test("status from props should be in the state", () => {
      const component = create(<ProfileStatus status="it-kamasutra.com" />);
      const instance = component.getInstance();
      expect(instance.state.status).toBe("it-kamasutra.com");
    });

    test("after creation <div> should be displayed with correct status", () => {
        const component = create(<ProfileStatus status="it-kamasutra.com" />);
        const root = component.root;
        let div=root.findByType("div")
        expect(div).not.toBeNull();
      });
  });