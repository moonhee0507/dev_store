class RouterContext {
    constructor(pathname) {
        this.pathname = pathname;
        this.state = {
            currentPath: this.pathname,
            push: () => {},
            goBack: () => {},
        };
        console.log(this);
    }

    setState(nextState) {
        this.state = { ...this.state, ...nextState };
    }
}

export default RouterContext;
