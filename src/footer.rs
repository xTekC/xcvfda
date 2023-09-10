use dioxus::prelude::*;

pub fn render_footer<'a>(cx: &Scope<'a>) -> Element<'a> {
    cx.render(rsx! {
        div {
            style: "text-align: center; background-color: #000000; color: #FFFFFF; padding: 1em;",
            p { "..." }
        }
    })
}
