 const bootstrap =require('react-bootstrap')
 template =() => {
    return `<!doctype html>
    <html lang="en">
    <head>
        <meta charset="utf-8">
        <title>MERN Skeleton</title>
    </head>
    <body>
        <div id="root">
            <h1>Hello World</h1>
            <p>At this point, the backend Node- Express- and MongoDB-based server that we can
            build on to add user-specific features.</p>
        </div>
    </body>
    </html>`
}
module.exports=template;