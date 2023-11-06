use dioxus::prelude::*;
use wasm_bindgen::prelude::*;
use web_sys::console;

#[wasm_bindgen]
extern "C" {
    fn switchCamera();
}

pub fn render_footer<'a>(cx: &Scope<'a>) -> Element<'a> {
    let on_switch_click = |_: MouseEvent| {
        switchCamera();
        let window = web_sys::window().expect("no global `window` exists");
        let navigator = window.navigator();
        
        let vibrate_pattern: JsValue = 200.into();
        
        if navigator.vibrate_with_pattern(&vibrate_pattern) {
            console::log_1(&"Vibration not supported".into());
        }
    };

    cx.render(rsx! {
        div {
            style: "text-align: center; background-color: #000000; color: #FFFFFF; padding: 1em;",
            button { 
                style: "background-color: #000000; color: #FFFFFF;", 
                onclick: on_switch_click,
                "< >"
            }
        }
    })
}
