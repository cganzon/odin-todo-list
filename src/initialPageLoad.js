const initialPageLoad = () => {
    const h1 = document.createElement("h1");
    h1.textContent = "Todo List";
    
    document.body.append(h1);
}

export default initialPageLoad;