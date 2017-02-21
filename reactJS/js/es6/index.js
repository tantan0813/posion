/**
 * Created by Administrator on 2017/1/16.
 */

//jsx语法HTML"<"开始；JavaScript”{}“开始解析 ；JSX into JavaScript play whit gulp babel react
//demo_01
    ReactDOM.render( //React最基本方法，用于将模板转为HTML语言，并插入指定dom节点
        <h1>Hello, world!</h1>,
        document.getElementById('demo_01'),
    );
//demo_02
var names = ["lili","marry","jan","tom"]
ReactDOM.render(
    <div>
    {
        names.map(function(name){
        return <div>hello~{name}!</div>
    })
    }</div>,
    document.getElementById("demo_02"),
);
//demo_03 if is array 会展开array全部
var arr = [
    <h1>hello world!</h1>,
    <h2>react is awesome</h2>,
];
ReactDOM.render(
    <div>{arr}</div>,
    document.getElementById("demo_03")
);
//demo_04
var HelloMessage = React.createClass({  //React.createClass()用于生成一个组件类（组件第一个字母必须大写；只有一个顶层标签）
    render:function(){
        return <h1>Hello {this.props.name}</h1>;
    }
});
ReactDOM.render(
    <HelloMessage name = "john"/>,
    document.getElementById("demo_04")
);
//demo_05 important class come turn and ergodic
var NotesList = React.createClass({
    render: function() {
        return (
            <ol>
                {
                    React.Children.map(this.props.children, function (child) { //this.props属性与组件的属性一一对应，但this.props.children表示所有子节点
                        return <li>{child}</li>;
                    })
                }
            </ol>
        );
    }
});
ReactDOM.render(
    <NotesList>
        <span>hello</span>
        <span>world</span>
        <span>world</span>
    </NotesList>,
    document.getElementById('demo_05'),
);

//demo_06
var data = 123;
var MyTitle = React.createClass({
    //propTypes验证组件实例的属性是否符合要求;getDefaultProps 方法可以用来设置组件属性的默认值。
    propTypes:{
        title:React.PropTypes.string.isRequired,
    },
    // getDefaultProps : function () {
    //     return {
    //         title : 'Hello World'
    //     };
    // },
    render:function(){
        return <h1>{this.props.title}</h1>;
    }
});
ReactDOM.render(
    <MyTitle title={data} />,
    document.getElementById("demo_06")
)
//demo_07 important
var MyComponent = React.createClass({
    handleClick : function(){
        this.refs.Input.focus();//借助refs来获取虚拟dom的真实dom；this.refs.[name]会返回这个真实的dom
        console.log(this.refs.Input.value)
    },
    render : function(){
        return (
            <div>
                <input type="text" ref="Input"/>
                <input type="button" value="Focus the text input" onClick={this.handleClick}/>
            </div>
        );
    }
});
ReactDOM.render(
    <MyComponent />,
    document.getElementById("demo_07")
);
//demo_08 important  用户UI互动
var LikeButton = React.createClass({
    getInitialState: function() {//初始状态
        return {liked: false};
    },
    handleClick: function(event) {//触发事件
        this.setState({liked:!this.state.liked});
    },
    render: function() {
        var text = this.state.liked ? 'like' : 'haven\'t liked';
        return (
            <p onClick={this.handleClick}>
                You {text} this. Click to toggle.
            </p>
        );
    }
});
ReactDOM.render(
    <LikeButton />,
    document.getElementById("demo_08")
);
//demo_09  form get input value
var Input = React.createClass({
    getInitialState:function(){
        return {value:'hello!'};
    },
    handleChange:function(){
        this.setState({value: event.target.value});
    },
    render:function(){
        var value = this.state.value;
        return(
            <div>
                <input type="text" value={value} onChange={this.handleChange}/>
                <p>{value}</p>
            </div>
        );
    }
});
ReactDOM.render(<Input/>,document.getElementById("demo_09"));
//demo_10
var Hello = React.createClass({
    getInitialState: function () {
        return {
            opacity: 1.0
        };
    },
        // Mounting：已插入真实 DOM
        // Updating：正在被重新渲染
        // Unmounting：已移出真实 DOM
    componentDidMount: function () {//will会在进入状态调用；did函数在进入状态之后调用
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
    render: function () {
        return (
            <div style={{opacity: this.state.opacity}}>
                Hello {this.props.name}
            </div>
        );
    }
});

ReactDOM.render(
    <Hello name="world"/>,
    document.getElementById('demo_10')
);
//demo_11  get 远程数据
var UserGist = React.createClass({
    getInitialState: function() {
        return {
            username: '',
            lastGistUrl: ''
        };
    },

    componentDidMount: function() {
        $.get(this.props.source, function(result) {
            var lastGist = result[0];
            if (this.isMounted()) {
                this.setState({
                    username: lastGist.owner.login,
                    lastGistUrl: lastGist.html_url
                });
            }
        }.bind(this));
    },

    render: function() {
        return (
            <div>
                {this.state.username}'s last gist is <a href={this.state.lastGistUrl}>here</a>.
            </div>
        );
    }
});

ReactDOM.render(
    <UserGist source="https://api.github.com/users/octocat/gists" />,
    document.getElementById('demo_11')
);
//demo_12 获取远程数据并做遍历处理
var RepoList = React.createClass({
    getInitialState: function() {
        return {
            loading: true,
            error: null,
            data: null
        };
    },

    componentDidMount() {
        this.props.promise.then(
            value => this.setState({loading: false, data: value}),
            error => this.setState({loading: false, error: error}));
    },

    render: function() {
        if (this.state.loading) {
            return <span>Loading...</span>;
        }
        else if (this.state.error !== null) {
            return <span>Error: {this.state.error.message}</span>;
        }
        else {
            var repos = this.state.data.items;
            var repoList = repos.map(function (repo, index) {
                return (
                    <li key={index}><a href={repo.html_url}>{repo.name}</a> ({repo.stargazers_count} stars) <br/> {repo.description}</li>
                );
            });
            return (
                <main>
                    <h1>Most Popular JavaScript Projects in Github</h1>
                    <ol>{repoList}</ol>
                </main>
            );
        }
    }
});
ReactDOM.render(
    <RepoList promise={$.getJSON('https://api.github.com/search/repositories?q=javascript&sort=stars')} />,
    document.getElementById('demo_12')
);