use dioxus::prelude::*;

pub fn render_header<'a>(cx: &Scope<'a>) -> Element<'a> {
    cx.render(rsx! {
        div {
            //style: "text-align: center; background-color: #000000; color: #FFFFFF; padding: 1em;",
            style: "display: flex; justify-content: center; padding-top: 1em; padding-bottom: 1.5em",
            h1 { "..." }
        }
    })
}
