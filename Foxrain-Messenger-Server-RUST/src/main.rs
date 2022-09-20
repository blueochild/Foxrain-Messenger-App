//서버 측 코드
use std::net::*;

//루프백 IP
const IP_ADDRESS:&str = "127.0.0.1:56789";

fn main(){
    let listener = TcpListener::bind(IP_ADDRESS).expect("bind 실패");

    println!("## Server running ##");

    for stream in listener.incoming(){
        if stream.is_ok(){
            println!("Client connected");
        }
    }
}