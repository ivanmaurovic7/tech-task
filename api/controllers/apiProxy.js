const axios = require('axios')

module.exports.fetchResults = async (req, res) => {
    try {
        if(!req.query.q) throw Error('Query parameter is required.')
        const response = await axios.get(`${process.env.EXTERNAL_API}?q=${req.query.q}&format=json`)
        
        res.json(response.data.RelatedTopics.map(item => {
            return item.Topics ? 
            item.Topics.map(topic => { return { title: topic.Text, URL: topic.FirstURL } }) 
            : { title: item.Text, URL: item.FirstURL }
        }).flat())

    } catch (err) {
        console.log(err)
        res.json({error: err.message})
    }
}

module.exports.fetchResultsPost = async (req, res) => {
    try {
        if(!req.body.q) throw Error('Query parameter is required.')
        const response = await axios.get(`${process.env.EXTERNAL_API}?q=${req.body.q}&format=json`)
        
        res.json(response.data.RelatedTopics.map(item => {
            return item.Topics ? 
            item.Topics.map(topic => { return { title: topic.Text, URL: topic.FirstURL } }) 
            : { title: item.Text, URL: item.FirstURL }
        }).flat())

    } catch (err) {
        console.log(err)
        res.json({error: err.message})
    }
}