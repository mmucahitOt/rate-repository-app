import {
  render,
  screen,
  fireEvent,
  waitFor,
} from "@testing-library/react-native";
import SignInFormContainer from "./SignInFormContainer";

describe("SignIn", () => {
  describe("SignInFormContainer", () => {
    it("calls onSubmit function with correct arguments when a valid form is submitted", async () => {
      // render the SignInFormContainer component, fill the text inputs and press the submit button
      const onSubmit = jest.fn();
      render(<SignInFormContainer onSubmit={onSubmit} />);

      const username = screen.getByPlaceholderText("Username");
      const password = screen.getByPlaceholderText("Password");
      const submitButton = screen.getByText("Sign In").parent;

      fireEvent.changeText(username, "testuser");
      fireEvent.changeText(password, "testpassword");
      fireEvent.press(submitButton);

      await waitFor(() => {
        expect(onSubmit.mock.calls[0][0]).toEqual({
          username: "testuser",
          password: "testpassword",
        });
      });
    });
  });
});
