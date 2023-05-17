import {StyledFooter, StyledPar} from "../styled/style"

export default function Footer ({author}) {
    return (
        <StyledFooter>
            <StyledPar>&#169; {author}, 2023</StyledPar>
        </StyledFooter>
    )
}