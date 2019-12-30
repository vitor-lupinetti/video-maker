const readline = require('readline-sync')

function start(){
    const content = {}

    content.searchTerm = askAndReturnSearchItem()
    content.prefix = askAndReturnPrefix()

    function askAndReturnSearchItem (){
        return readline.question('Type a wikipedia search term: ')
    }

    function askAndReturnPrefix(){
        const prefixes = ['Who is', 'What is', 'The history of']
        const selectedPrefixeIndex = readline.keyInSelect(prefixes, 'Choose one option: ')
        const selectedPrefixText = prefixes[selectedPrefixeIndex]

        return selectedPrefixText
    }

    console.log(content)
}

start()