// import { User } from '@prisma/client'; // Import User type from Prisma or define your own user type

// declare global {
//     namespace Express {
//         interface Request {
//             user?: User; // Add the `user` property
//         }
//     }
// }

import { User } from '@prisma/client'; // Import User type from Prisma

declare global {
    namespace Express {
        interface Request {
            user?: { id: number }; // Ensure this matches the type in your middleware
        }
    }
}
