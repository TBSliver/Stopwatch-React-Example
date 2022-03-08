import {render, screen} from '@testing-library/react';
import {Button} from './button';

test('button has settable id', () => {
    render(<Button id={"button-id"}>Button</Button>);
    const buttonEl = screen.getByText(/Button/);
    expect(buttonEl).toBeInTheDocument();
    expect(buttonEl.id).toEqual('button-id');
});

test('button has onClick function', () => {
    let isClicked = false;
    render(<Button onClick={() => isClicked = !isClicked}>Button</Button>);
    const buttonEl = screen.getByText(/Button/);
    expect(isClicked).toBeFalsy();
    buttonEl.click();
    expect(isClicked).toBeTruthy();
});

test('button can be disabled', () => {
    let isClicked = false;
    render(<Button disabled onClick={() => isClicked = !isClicked}>Button</Button>);
    const buttonEl = screen.getByText(/Button/);
    expect(isClicked).toBeFalsy();
    buttonEl.click();
    expect(isClicked).toBeFalsy();
})
