import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from './App';

/**
 * note tests use getByText exact so the tests still work with debug data shown
 */

test('has start button on init', () => {
    render(<App/>);
    const button = screen.getByText("Start", {exact: true});
    expect(button).toBeInTheDocument();
    expect(button.id).toEqual('stopwatch-start-stop');
});

test('start button has correct id', () => {
    render(<App/>);
    const button = screen.getByText("Start", {exact: true});
    expect(button.id).toEqual('stopwatch-start-stop');
});

test('start button says stop when running', () => {
    render(<App/>);
    const button = screen.getByText("Start", {exact: true});
    expect(button.textContent).toEqual('Start');
    userEvent.click(button);
    expect(button.textContent).toEqual('Stop');
});

test('has reset button on init', () => {
    render(<App/>);
    const button = screen.getByText("Reset", {exact: true});
    expect(button).toBeInTheDocument();
});

test('reset button has correct id', () => {
    render(<App/>);
    const button = screen.getByText("Reset", {exact: true});
    expect(button.id).toEqual('stopwatch-reset');
});

test('display time has correct id', () => {
    render(<App/>);
    const display = screen.getByRole('heading', {level: 1});
    expect(display.id).toEqual("stopwatch-elapsed");
});

test('start time is zero on init', () => {
    render(<App/>);
    const display = screen.getByRole('heading', {level: 1});
    expect(Number(display.textContent)).toEqual(0);
});

/*
 This test keeps exploding with issues without heavily diving how timing
 works with react and jest and testing-library... look later

test('time elapses when started', async () => {
    render(<App/>);
    const display = screen.getByRole('heading', {level: 1});
    expect(display.textContent).toEqual("0");

    userEvent.click(screen.getByText("Start", {exact: true}));

    userEvent.click(screen.getByText("Stop", {exact: true}));

    expect(Number(display.textContent)).toBeGreaterThan(0);
});
 */
