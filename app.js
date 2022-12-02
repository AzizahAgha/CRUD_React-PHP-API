//const fs=require('fs')

//fs.writeFileSync('notes.txt','hino!')

//fs.appendFileSync('notes.txt','how are you doing')
//............................
//const add=require('./utils.js')

//const sum=add(4,-2)
//console.log(sum)
//.......................................................

//const getNotes=require('./notes.js')
//const msg=getNotes()
//console.log(msg)
//.............................................................

//const validator=require('validator')

//console.log(validator.isEmail('Sana@example.com'))

//console.log(validator.isURL('http.//med.in))
//....................................................................

//const chalk=require('chalk')

//console.log(chalk.cyan.bgYellowBright.inverse.bold('Success!'))
//.....................................................................

const chalk=require('chalk')
const yargs=require('yargs')

//Add command

yargs.command({
    command: 'add',
    describe: 'Add Data',
    handler: function(){
        console.log('Adding a new data')
    }
})


//remove command

yargs.command({
    command: 'remove',
    describe: 'Remove Data',
    handler: function(){
        console.log('Removing  data.....')
    }
})

//list command

yargs.command({
    command: 'list',
    describe: 'List Data',
    handler: function(){
        console.log('Listing out all the data.....')
    }
})

//read command

yargs.command({
    command: 'read',
    describe: 'Read Data',
    handler: function(){
        console.log('Reading  the data.....')
    }
})
console.log(yargs.argv)




