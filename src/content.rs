use dioxus::prelude::*;
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
extern "C" {
    fn switchCamera();
}

pub fn render_content<'a>(cx: &Scope<'a>) -> Element<'a> {
    let on_switch_click = |_: MouseEvent| {
        switchCamera();
    };

    cx.render(rsx! {
        div {
            class: "has-background-black has-text-white is-flex is-flex-direction-column is-align-items-center is-justify-content-center",
            style: "height: calc(100vh - 100px); overflow: hidden;",

            div {
                class: "is-flex is-justify-content-center is-align-items-center",
                style: "height: calc(100vh - 100px); width: 100%; border: 2px solid grey;",
                video {
                    id: "cameraVideo",
                    style: "width: 100%; height: 100%; object-fit: cover;",
                    autoplay: true,
                }
            }

            div {
                class: "has-background-black is-flex is-justify-content-center",
                style: "height: 70px;",  
                button {
                    onclick: on_switch_click,
                    class: "button is-black",
                    style: "width: 80px; height: 60px; margin: 5px 0;",  
                    img {
                        src: "/flip.png",
                        alt: "Switch Camera Icon",
                        style: "width: 100%; height: 100%;",
                    }
                }
            }
        }
    })
}
