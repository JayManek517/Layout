// import type { BoxProps } from '@mui/material/Box';
// import type { Breakpoint } from '@mui/material/styles';

// import { mergeClasses } from 'minimal-shared/utils';

// import Box from '@mui/material/Box';

// import { layoutClasses } from '../core/classes';

// // ----------------------------------------------------------------------

// export type AuthSplitContentProps = BoxProps & { layoutQuery?: Breakpoint };

// export function AuthSplitContent({
//   sx,
//   children,
//   className,
//   layoutQuery = 'md',
//   ...other
// }: AuthSplitContentProps) {
//   return (
//     <Box
//       className={mergeClasses([layoutClasses.content, className])}
//       sx={[
//         (theme) => ({
//           display: 'flex',
//           flex: '1 1 auto',
//           alignItems: 'center',
//           flexDirection: 'column',
//           p: theme.spacing(3, 2, 10, 2),
//           [theme.breakpoints.up(layoutQuery)]: {
//             justifyContent: 'center',
//             p: theme.spacing(10, 2, 10, 2),
//           },
//         }),
//         ...(Array.isArray(sx) ? sx : [sx]),
//       ]}
//       {...other}
//     >
//       <Box
//         sx={{
//           width: 1,
//           display: 'flex',
//           flexDirection: 'column',
//           maxWidth: 'var(--layout-auth-content-width)',
//         }}
//       >
//         {children}
//       </Box>
//     </Box>
//   );
// }


import type { BoxProps } from '@mui/material/Box';
import type { Breakpoint } from '@mui/material/styles';

import { mergeClasses } from 'minimal-shared/utils';

import Box from '@mui/material/Box';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useTheme, IconButton, Typography } from '@mui/material';

import { layoutClasses } from '../core/classes';

// ----------------------------------------------------------------------

export type AuthSplitContentProps = BoxProps & { layoutQuery?: Breakpoint };

export function AuthSplitContent({
  sx,
  children,
  className,
  layoutQuery = 'md',
  ...other
}: AuthSplitContentProps) {
  const theme = useTheme();

  return (
    <Box
      className={mergeClasses([layoutClasses.content, className])}
      sx={[
        (innertheme) => ({
          display: 'flex',
          // flex: '1 1 auto',
          alignItems: 'center',
          flexDirection: 'column',
          width: { xs: '100%', sm: '100%', md: '100%', lg: '40%', xl: '40%' },
          height: '100dvh',
          // p: theme.spacing(3, 2, 4, 2),
          [innertheme.breakpoints.up(layoutQuery)]: {
            justifyContent: 'center',
            // p: theme.spacing(4, 2, 4, 2),
          },
        }),
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: { xs: 'center', sm: 'center', md: 'center' },
          flexDirection: 'column',
          height: '100%',
          overflow: 'auto',
          // p: theme.spacing(2),
        }}
      >
        {/* Top Logo */}
        <Box
          component="img"
          src="https://www.gnwebsoft.com/Default/assets/img-gnweb/GNWebsoft_Logo.png"
          sx={{
            height: '70px',
            my: 3,
            maxWidth: '100%',
            objectFit: 'contain',
          }}
        />

        {/* Children */}
        <Box
          sx={{
            width: 1,
            display: 'flex',
            flexDirection: 'column',
            maxWidth: 'var(--layout-auth-content-width)',
            border: (innertheme) => `dashed 2px ${innertheme.vars.palette.divider}`,
            p: theme.spacing(2),
          }}
        >
          {children}
        </Box>

        {/* Social Icons */}
        <Box sx={{ p: 1, mt: 2 }}>
          <Box
            sx={{
              display: 'flex',
              gap: 1,
              justifyContent: 'center',
              overflow: 'hidden',
              flexWrap: 'wrap',
            }}
          >
            <IconButton
              sx={{
                color: 'black',
                '&:hover': {
                  borderBottom: `1px solid black`,
                  borderRadius: '0px',
                },
              }}
              href="#"
              target="_blank"
            >
              <FacebookIcon />
            </IconButton>
            <IconButton
              sx={{
                color: 'black',
                '&:hover': {
                  borderBottom: `1px solid black`,
                  borderRadius: '0px',
                },
              }}
              href="#"
              target="_blank"
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              sx={{
                color: 'black',
                '&:hover': {
                  borderBottom: `1px solid black`,
                  borderRadius: '0px',
                },
              }}
              href="#"
              target="_blank"
            >
              <XIcon />
            </IconButton>
            <IconButton
              sx={{
                color: 'black',
                '&:hover': {
                  borderBottom: `1px solid black`,
                  borderRadius: '0px',
                },
              }}
              href="#"
              target="_blank"
            >
              <InstagramIcon />
            </IconButton>
            <IconButton
              sx={{
                color: 'black',
                '&:hover': {
                  borderBottom: `1px solid black`,
                  borderRadius: '0px',
                },
              }}
              href="#"
              target="_blank"
            >
              <YouTubeIcon />
            </IconButton>
          </Box>
        </Box>

        {/* Bottom Logo */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            gap: 1,
            my: 3,
          }}
        >
          <Typography sx={{ fontSize: '1rem', fontWeight: 400 }}>Powered By</Typography>
          <Box component="a" href="https://www.gnwebsoft.com" target="_blank">
            <Box
              component="img"
              src="https://www.gnwebsoft.com/Default/assets/img-gnweb/GNWebsoft_Logo.png"
              sx={{ width: '200px', maxWidth: '100%', objectFit: 'contain' }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
