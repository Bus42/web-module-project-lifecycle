import { render, screen } from "@testing-library/react";
import Usercard from "../components/Usercard";
import { MY_DATA } from "../data/constants";

test('Usercard renders', () => {
    render(<Usercard user={MY_DATA} />);
    const me = screen.getByText(/Bus42/i);
    expect(me).toBeInTheDocument();
})