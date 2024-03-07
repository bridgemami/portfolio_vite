import Icons from "./icons/Icons"
import {StyledFooter, StyledPar} from "../styled/style"

export default function Footer ({author}) {
    const year = new Date().getFullYear()
    return (
        <StyledFooter>
        <Icons />
        <StyledPar>&#169; {author}, {year}</StyledPar>
        </StyledFooter>
    )
}