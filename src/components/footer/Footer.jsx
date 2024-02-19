import Icons from "../navbar/icons/Icons"
import {StyledFooter, StyledPar} from "../styled/style"

export default function Footer ({author}) {
    const year = new Date().getFullYear()
    return (
        <StyledFooter>
            <StyledPar>&#169; {author}, {year}</StyledPar>
            <Icons />
        </StyledFooter>
    )
}