"use strict";

/**
 * Created by Administrator on 2017/1/16.
 */

//jsx语法HTML"<"开始；JavaScript”{}“开始解析 ；JSX into JavaScript play whit gulp babel react
//demo_01
ReactDOM.render( //React最基本方法，用于将模板转为HTML语言，并插入指定dom节点
React.createElement(
    "h1",
    null,
    "Hello, world!"
), document.getElementById('demo_01'));
//demo_02
var names = ["lili", "marry", "jan", "tom"];
ReactDOM.render(React.createElement(
    "div",
    null,
    names.map(function (name) {
        return React.createElement(
            "div",
            null,
            "hello~",
            name,
            "!"
        );
    })
), document.getElementById("demo_02"));
//demo_03 if is array 会展开array全部
var arr = [React.createElement(
    "h1",
    null,
    "hello world!"
), React.createElement(
    "h2",
    null,
    "react is awesome"
)];
ReactDOM.render(React.createElement(
    "div",
    null,
    arr
), document.getElementById("demo_03"));
//demo_04
var HelloMessage = React.createClass({
    displayName: "HelloMessage",
    //React.createClass()用于生成一个组件类（组件第一个字母必须大写；自有一个顶层标签）
    render: function render() {
        return React.createElement(
            "h1",
            null,
            "Hello ",
            this.props.name
        );
    }
});
ReactDOM.render(React.createElement(HelloMessage, { name: "john" }), document.getElementById("demo_04"));
//demo_05 important class come turn and ergodic
var NotesList = React.createClass({
    displayName: "NotesList",

    render: function render() {
        return React.createElement(
            "ol",
            null,
            React.Children.map(this.props.children, function (child) {
                //this.props属与组件的属性一一对应，但this.props.children表示所有子节点
                return React.createElement(
                    "li",
                    null,
                    child
                );
            })
        );
    }
});
ReactDOM.render(React.createElement(
    NotesList,
    null,
    React.createElement(
        "span",
        null,
        "hello"
    ),
    React.createElement(
        "span",
        null,
        "world"
    ),
    React.createElement(
        "span",
        null,
        "world"
    )
), document.getElementById('demo_05'));

//demo_06
var data = 123;
var MyTitle = React.createClass({
    displayName: "MyTitle",

    //propTypes验证组件实例的属性是否符合要求;getDefaultProps 方法可以用来设置组件属性的默认值。
    propTypes: {
        title: React.PropTypes.string.isRequired
    },
    // getDefaultProps : function () {
    //     return {
    //         title : 'Hello World'
    //     };
    // },
    render: function render() {
        return React.createElement(
            "h1",
            null,
            this.props.title
        );
    }
});
ReactDOM.render(React.createElement(MyTitle, { title: data }), document.getElementById("demo_06"));
//demo_07 important
var MyComponent = React.createClass({
    displayName: "MyComponent",

    handleClick: function handleClick() {
        this.refs.Input.focus(); //借助refs来获取虚拟dom的真实dom；this.refs.[name]会返回这个真实的dom
        console.log(this.refs.Input.value);
    },
    render: function render() {
        return React.createElement(
            "div",
            null,
            React.createElement("input", { type: "text", ref: "Input" }),
            React.createElement("input", { type: "button", value: "Focus the text input", onClick: this.handleClick })
        );
    }
});
ReactDOM.render(React.createElement(MyComponent, null), document.getElementById("demo_07"));
//demo_08 important  用户UI互动
var LikeButton = React.createClass({
    displayName: "LikeButton",

    getInitialState: function getInitialState() {
        //初始状态
        return { liked: false };
    },
    handleClick: function handleClick(event) {
        //触发事件
        this.setState({ liked: !this.state.liked });
    },
    render: function render() {
        var text = this.state.liked ? 'like' : 'haven\'t liked';
        return React.createElement(
            "p",
            { onClick: this.handleClick },
            "You ",
            text,
            " this. Click to toggle."
        );
    }
});
ReactDOM.render(React.createElement(LikeButton, null), document.getElementById("demo_08"));
//demo_09  form get input value
var Input = React.createClass({
    displayName: "Input",

    getInitialState: function getInitialState() {
        return { value: 'hello!' };
    },
    handleChange: function handleChange() {
        this.setState({ value: event.target.value });
    },
    render: function render() {
        var value = this.state.value;
        return React.createElement(
            "div",
            null,
            React.createElement("input", { type: "text", value: value, onChange: this.handleChange }),
            React.createElement(
                "p",
                null,
                value
            )
        );
    }
});
ReactDOM.render(React.createElement(Input, null), document.getElementById("demo_09"));
//demo_10
var Hello = React.createClass({
    displayName: "Hello",

    getInitialState: function getInitialState() {
        return {
            opacity: 1.0
        };
    },
    // Mounting：已插入真实 DOM
    // Updating：正在被重新渲染
    // Unmounting：已移出真实 DOM
    componentDidMount: function componentDidMount() {
        //will会在进入状态调用；did函数在进入状态之后调用
        // componentWillMount()
        // componentDidMount()
        // componentWillUpdate(object nextProps, object nextState)
        // componentDidUpdate(object prevProps, object prevState)
        // componentWillUnmount()
        // componentWillReceiveProps(object nextProps)：已加载组件收到新的参数时调用
        // shouldComponentUpdate(object nextProps, object nextState)：组件判断是否重新渲染时调用
        this.timer = setInterval(function () {
            var opacity = this.state.opacity;
            opacity -= .05;
            if (opacity < 0.1) {
                opacity = 1.0;
            }
            this.setState({
                opacity: opacity
            });
        }.bind(this), 100);
    },
    render: function render() {
        return React.createElement(
            "div",
            { style: { opacity: this.state.opacity } },
            "Hello ",
            this.props.name
        );
    }
});

ReactDOM.render(React.createElement(Hello, { name: "world" }), document.getElementById('demo_10'));
//demo_11  get 远程数据
var UserGist = React.createClass({
    displayName: "UserGist",

    getInitialState: function getInitialState() {
        return {
            username: '',
            lastGistUrl: ''
        };
    },

    componentDidMount: function componentDidMount() {
        $.get(this.props.source, function (result) {
            var lastGist = result[0];
            if (this.isMounted()) {
                this.setState({
                    username: lastGist.owner.login,
                    lastGistUrl: lastGist.html_url
                });
            }
        }.bind(this));
    },

    render: function render() {
        return React.createElement(
            "div",
            null,
            this.state.username,
            "'s last gist is ",
            React.createElement(
                "a",
                { href: this.state.lastGistUrl },
                "here"
            ),
            "."
        );
    }
});

ReactDOM.render(React.createElement(UserGist, { source: "https://api.github.com/users/octocat/gists" }), document.getElementById('demo_11'));
//demo_12 获取远程数据并做遍历处理
var RepoList = React.createClass({
    displayName: "RepoList",

    getInitialState: function getInitialState() {
        return {
            loading: true,
            error: null,
            data: null
        };
    },

    componentDidMount: function componentDidMount() {
        var _this = this;

        this.props.promise.then(function (value) {
            return _this.setState({ loading: false, data: value });
        }, function (error) {
            return _this.setState({ loading: false, error: error });
        });
    },


    render: function render() {
        if (this.state.loading) {
            return React.createElement(
                "span",
                null,
                "Loading..."
            );
        } else if (this.state.error !== null) {
            return React.createElement(
                "span",
                null,
                "Error: ",
                this.state.error.message
            );
        } else {
            var repos = this.state.data.items;
            var repoList = repos.map(function (repo, index) {
                return React.createElement(
                    "li",
                    { key: index },
                    React.createElement(
                        "a",
                        { href: repo.html_url },
                        repo.name
                    ),
                    " (",
                    repo.stargazers_count,
                    " stars) ",
                    React.createElement("br", null),
                    " ",
                    repo.description
                );
            });
            return React.createElement(
                "main",
                null,
                React.createElement(
                    "h1",
                    null,
                    "Most Popular JavaScript Projects in Github"
                ),
                React.createElement(
                    "ol",
                    null,
                    repoList
                )
            );
        }
    }
});

ReactDOM.render(React.createElement(RepoList, { promise: $.getJSON('https://api.github.com/search/repositories?q=javascript&sort=stars') }), document.getElementById('demo_12'));