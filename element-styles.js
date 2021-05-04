import { css } from 'lit-element';

export const ElementStyles = css`
.alert-box{
  position:absolute;
  min-width:255px;
  min-height:50px;
  top:20px;
  right:20px;
  -webkit-box-shadow: 0px 0px 12px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 0px 12px 0px rgba(0,0,0,0.75);
  box-shadow: 0px 0px 12px 0px rgba(0,0,0,0.75);
  border-radius: 5px;
  text-align: center;
}

.container {
float: right;
}

.cell{
display:inline-block;
}

.svg{
fill:#fff;
}

.toast {
text-align:left;
padding: 21px 0;
background-color:#fff;
border-radius:4px;
max-width: 500px;
top: 0px;
position:relative;
box-shadow: 1px 7px 14px -5px rgba(0,0,0,0.2);
}

.toast:before {
content: '';
position: absolute;
top: 0;
left: 0;
width: 4px;
height: 100%;
border-top-left-radius:4px;
border-bottom-left-radius: 4px;
}

.icon{
position:absolute;
top:50%;
left:22px;
transform:translateY(-50%);
width:14px;
height:14px;
padding: 7px;
border-radius:50%;
display:inline-block;
}

.type {
color: #3e3e3e;
font-weight: 700;
margin-top: 0;
margin-bottom: 8px;
}

.message {
font-size: 14px;
margin-top: 0;
margin-bottom: 0;
color: #878787;
}

.content{
padding-left:70px;
padding-right:60px;
}

.close {
position: absolute;
right: 22px;
top: 40%;
width: 14px;
cursor:pointer;
height: 14px;
fill:#878787;
transform: translateY(-50%);
}

.remove{
font-size:20px;
}

.toast--green .icon{
background-color:#2BDE3F;
}

.toast--green:before{
background-color:#2BDE3F;
}

.toast--blue .icon{
background-color:#1D72F3;
}

.toast--blue:before{
background-color:#1D72F3;
}

.toast--yellow, .toast--blue, .toast--green {
margin-top:20px;
}

.toast--yellow .icon{
background-color:#FFC007;
}

.toast--yellow:before{
background-color:#FFC007;
}
`;