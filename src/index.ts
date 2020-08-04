import{AutoGenDoc} from './AutoGen'

var env:string[];
process.argv.forEach((val, index) => {
    console.log(val+"  "+index+"    in node")
    // env[index]=val;
  });

 let startCreataion=new AutoGenDoc();

let filelocation=process.argv[2]
 startCreataion.generateDocs(filelocation);

  