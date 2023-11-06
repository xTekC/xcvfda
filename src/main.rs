mod content;
mod footer;
mod header;

use dioxus::prelude::*;

fn main() {
    wasm_logger::init(wasm_logger::Config::default());
    console_error_panic_hook::set_once();

    dioxus_web::launch(app);
}

fn app<'a>(cx: Scope<'a>) -> Element<'a> {
    let header = header::render_header(&cx);
    let footer = footer::render_footer(&cx);
    let main_content = content::render_content(&cx);
    cx.render(rsx! {
        div {
            style: "display: flex; flex-direction: column; height: 100vh; background-color: #000000; color: #FFFFFF;",
            header,
            div {
                style: "flex: 1; overflow: auto; background-color: #000000; width: 99%; margin: auto; border: 2px solid grey;",
                main_content,
            },
            footer,
        }
    })
}
