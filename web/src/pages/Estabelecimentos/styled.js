import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const EstabelecimentoContainer = styled.div`
    margin-top: 20px;

    div {
        display:flex;
        align-items: center;
        justify-content: space-between;
        padding: 5px 0;
    }

    div + div {
        border-top: 1px solid #eee;
    }

    table {
  border: 1px solid #ccc;
  border-collapse: collapse;
  margin: 0;
  padding: 0;
  width: 100%;
  table-layout: fixed;
}

table caption {
  font-size: 1.5em;
  margin: .5em 0 .75em;
}

table tr {
  background-color: #f8f8f8;
  border: 1px solid #ddd;
  padding: .35em;
}

table th,
table td {
  padding: .625em;
  text-align: center;
}

table th {
  font-size: .85em;
  letter-spacing: .1em;
  text-transform: uppercase;
}

@media screen and (max-width: 1027px) {
  table {
    border: 0;
  }

  table caption {
    font-size: 1.3em;
  }
  
  table thead {
    border: none;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }
  
  table tr {
    border-bottom: 3px solid #ddd;
    display: block;
    margin-bottom: .625em;
  }
  
  table td {
    border-bottom: 1px solid #ddd;
    display: block;
    font-size: .8em;
    text-align: right;
  }
  
  table td::before {
    /*
    * aria-label has no advantage, it won't be read inside a table
    content: attr(aria-label);
    */
    content: attr(data-label);
    float: left;
    font-weight: bold;
    text-transform: uppercase;
  }
  
  table td:last-child {
    border-bottom: 0;
  }
}


/* general styling */
body {
  font-family: "Open Sans", sans-serif;
  line-height: 1.25;
}
`;

export const EstabelecimentoLogo = styled.div`
   img{
       width: 36px;
       height: 36px;
       border-radius: 50px;
   }
`;


export const NovoEstabelecimento = styled(Link)`
   display: block;
   padding:20px 0 10px;
`;


export const ButtonAndSearch = styled.div`
   display: flex;
   align-items: center;
   justify-content:space-around;

   input {
        margin-bottom: 20px;
        height: 35px;
        padding: 0 10px;
        border-radius: 4px;
    }
`;

