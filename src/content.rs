use dioxus::prelude::*;

pub fn render_content<'a>(cx: &Scope<'a>) -> Element<'a> {
    cx.render(rsx! {
        div {
            div {
                style: "width: 99%; margin: auto;",
                video {
                    id: "cameraVideo",
                    style: "width: 100%; height: 100%; object-fit: fill;",
                    autoplay: true,
                }
            }
        }
    })  
}
