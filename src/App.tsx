import React from "react";
import {
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@material-ui/core";
import SyntaxHighlighter from "react-syntax-highlighter";
import Link from "@material-ui/core/Link";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import co from "react-syntax-highlighter/dist/esm/styles/hljs/atelier-cave-light";
import { Divider } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  })
);
function App() {
  const classes = useStyles();
  const [affiliation, setAffiliation] = React.useState("");
  const [type, setType] = React.useState("");

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setAffiliation(event.target.value as string);
  };
  const handleChange2 = (event: React.ChangeEvent<{ value: unknown }>) => {
    setType(event.target.value as string);
  };

  const preventDefault = (event: React.SyntheticEvent) =>
    event.preventDefault();
  const codeString = `fetch('https://api.eatmoreice.com/v1/vtubers/hololive/animal')
    .then(response => response.json())
    .then(quote => console.log(quote))`;
  const resJson = `{
      "name": "...",
      "url": "https://www.youtube.com/channel/..."
}`;
  return (
    <div className="App-header">
      <Container>
        <h1>{"Get random virtual youtuber"}</h1>
        <Divider />
        <div>
          <h4>{"Select Affiliation and Type"}</h4>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">Affiliations</InputLabel>
            <Select
              autoWidth
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={affiliation}
              onChange={handleChange}
            >
              <MenuItem value={"nijisanji/"}>nijisanji</MenuItem>
              <MenuItem value={"dotlive/"}>.live</MenuItem>
              <MenuItem value={"hololive/"}>hololive</MenuItem>
              <MenuItem value={"774inc/"}>774inc.</MenuItem>
              <MenuItem value={"other/"}>other</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">Types</InputLabel>
            <Select
              autoWidth
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={type}
              onChange={handleChange2}
            >
              <MenuItem value={"animal"}>animal</MenuItem>
              <MenuItem value={"cat"}>cat</MenuItem>
              <MenuItem value={"song"}>song</MenuItem>
              <MenuItem value={"game"}>game</MenuItem>
              <MenuItem value={"asmr"}>asmr</MenuItem>
              <MenuItem value={"3d"}>3d</MenuItem>
              <MenuItem value={"english"}>english</MenuItem>
              <MenuItem value={"male"}>male</MenuItem>
              <MenuItem value={"loli"}>loli</MenuItem>
              <MenuItem value={"seiso"}>seiso</MenuItem>
              <MenuItem value={"video"}>video</MenuItem>
              <MenuItem value={"trap"}>trap</MenuItem>
              <MenuItem value={"twin-tail"}>twin-tail</MenuItem>
              <MenuItem value={"apex"}>apex</MenuItem>
              <MenuItem value={"mine-craft"}>mine-craft</MenuItem>
              <MenuItem value={"anthro"}>anthro</MenuItem>
              <MenuItem value={"ecchi"}>ecchi</MenuItem>
              <MenuItem value={"big-breast"}>big-breast</MenuItem>
              <MenuItem value={"small-breast"}>small-breast</MenuItem>
              <MenuItem value={"idle-talk"}>idle-talk</MenuItem>
              <MenuItem value={"long-stream"}>long-stream</MenuItem>
            </Select>
          </FormControl>
          <Link
            component="a"
            href={"https://api.eatmoreice.com/v1/vtubers/" + affiliation + type}
            onClick={preventDefault}
          ></Link>
          <div>
            <a
              href={
                "http://api.eatmoreice.com/v1/vtubers/" + affiliation + type
              }
            >
              {"http://api.eatmoreice.com/v1/vtubers/" + affiliation + type}
            </a>
          </div>
          <div>
            <h4>
              {"https://api.eatmoreice.com/v1/vtubers/:Affiliation/:Types"}
            </h4>
            <Divider />
            <h4>{"Get random virtual youtuber"}</h4>
          </div>
          <div id="getting-started">
            <SyntaxHighlighter
              customStyle={{ minWidth: 500 }}
              language="javascript"
              style={co}
            >
              {codeString}
            </SyntaxHighlighter>
          </div>
          <div>
            <h4>{">>output"}</h4>
            <SyntaxHighlighter language="json" style={co}>
              {resJson}
            </SyntaxHighlighter>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default App;
