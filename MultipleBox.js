import React, { Component } from 'react';
import "../assets/css/MultipleBox.css";

export class MultipleBox extends Component {
    render() {
        return (
            <div className="container">
                <div className="row m-2">
                    <div className="col-2 box2">
                        <div className="d-flex justify-content-between my-2">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAABmJLR0QA/wD/AP+gvaeTAAAC90lEQVRYhe2XTWwMYRjHf8+sXUU4kCAiBOmmEokDBw6CuIiLEKldoiQSDQdxaasJCSdsNvFxkQphK9hFuLhxQJuIRuJA2tiqDYkSElmlPrY77+Ow3WTtzO5Oq+hh/5eZeeZ5/u8vM+887ztQVVUjk5S60RdvDRrMdkVnuxZakrJtba8LR/oBehMt9aq6ruxgwjtbTKyuPpryDPMy3tSgIucBfzlz4ItiNge3Ru+lrjfNzqq8AiZVqBlEaawNRa5UhOmLtwaN2M+HQZ6B3APN/JakTAE2ICwEPk0IZBYt2HQq3RtvbkfYUQEGYMhS35JFoWPJwuCE4iwj9rY8yOd0etnyxnNDbm6p2wcOZzOBF8BMOxPYCMTEolPVE4zfiB0GjhYGLZfEeQAoD0qBACzYdCqN0AVg8jWYjx5AhiXziiNuMN9zB51e0U+ZkfPlR+7aUs8o6hzb8ZoU7RRkHyJbkommO2qbuzXqtwtzbLECtpUNAytzAfMQwIjOFy35gVaUA+btzCk35n74th9YIchV8fnIYIqyCq6VRDAcfQwgKutHTeIGs3btkWzf9Zb1RvUkEAZq3EtlQFTbflqTDwE8advjF+QWore9DKxGksUxxzN90rbHn5+4qYtHanTal1lZ/L7CHCuTGUoPfH1fboKPRg6YZKLlDOjL7z/NhaUN0UGvRsl482LLYpXXfLWtZG34+P3CmOM1WcpUFU5Pnmid6E00P1XkvQhZp50JoLJQlZPBUOQiwmpVznqFEdFLQHmYAtUAKwUF1w9W8oeJXgEqya3P/DdVYUrJ2YFVYmLpI68GaujInfBALBq91zn7zLiSo8/0Xju4Rnwm6NXAGDqCoUjPX+kzIrpTlV1eTRH2Aj1j0WfG1QQe3zAq6nmD9CdScexLXJ/Mm3/AAmJeF4ccMLaYGOB5tR6lvtro5YowdfXRFEojMKZ7lUIQkN1uP3Kuq3ZtKHKl72ZTl7FlmypzylqLdA+fdKvqufKp9Nti2kv9UVZV1Uj1CyIeJoqdR3w/AAAAAElFTkSuQmCC" alt="logo"></img>
                        </div>
                        <div className="d-flex align-items-start">
                            <strong>Airtime Bank</strong>
                        </div>
                        <div className="d-flex justify-content-between mt-1">
                            <small>Lorem, ipsum dolor.</small>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MultipleBox
