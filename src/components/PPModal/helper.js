import React from "react";
import { Button } from "@nextui-org/button";

export function cloneWithButtonPress(children, onPress) {
    return React.Children.map(children, child => {
        // Check if the current child is a Button, or use other logic if needed to identify your Button component
        if (child.type === Button) {
            // Apply the onPress handler to the Button
            return React.cloneElement(child, { onPress });
        } else if (child.props && child.props.children) {
            // Recurse if the child has children
            return React.cloneElement(child, {}, cloneWithButtonPress(child.props.children, onPress));
        }
        return child;
    });
}