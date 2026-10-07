export default function Header() {
    return (
        <>
            <h1 style={{ textAlign: "center" }}>WELCOME TO SAU</h1>
            <div style={{ textAlign: "center" }}>
                <a href="/">HOME</a> |
                <a href="/about">ABOUT</a> |
                <a href="/contact">CONTACT</a> |
                <a href="/dti/sau/product">PRODUCTS</a> 


                </div>
            <hr style={{ border: "0", height: "2px", backgroundColor: "#550091", width: "80%" }} />
        </>
    );
}