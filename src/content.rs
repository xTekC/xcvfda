use dioxus::prelude::*;
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
extern "C" {
    fn activateCamera();
    fn deactivateCamera();
    fn switchCamera();
}

pub fn render_content<'a>(cx: &Scope<'a>) -> Element<'a> {
    // let on_activate_click = |_: MouseEvent| {
    //     activateCamera();
    // };
    // let on_deactivate_click = |_: MouseEvent| {
    //     deactivateCamera();
    // };

    activateCamera();

    let on_switch_click = |_: MouseEvent| {
        switchCamera();
    };

    cx.render(rsx! {
        div {
            style: "flex: 1; text-align: center; background-color: #000000; color: #FFFFFF; display: flex; flex-direction: column; align-items: center;",

            video {
                id: "cameraVideo",
                style: "max-width: 100%;",
                autoplay: true,
            },

            // div {
            //     style: "display: flex; justify-content: center; gap: 20px;",
            //     button {
            //         onclick: on_activate_click,
            //         style: "background-color: #e7e7e7; width: 100px; height: 50px; margin-top: 10px;",
            //         "Activate",
            //     },

            //     button {
            //         onclick: on_deactivate_click,
            //         style: "background-color: #e7e7e7; width: 100px; height: 50px; margin-top: 10px;",
            //         "Deactivate",
            //     }
            // },

            // button {
            //     onclick: on_switch_click,
            //     style: "background-color: #e7e7e7; width: 100px; height: 50px; margin-top: 20px;",
            //     "",
            // }

            button {
                onclick: on_switch_click,
                style: "background-color: #000000; width: 100px; height: 80px; margin-top: 20px;",
                img {
                    src: "/flip.png",
                    alt: "Switch Camera Icon",
                    style: "width: 100%; height: 100%;",
                }
            }
            
        }
    })
}
