import { MulterOptions } from '@nestjs/platform-express/multer/interfaces/multer-options.interface';

export class ConfigMulter {
  static Uploadfiles(): MulterOptions {
    return {
      dest: './uploads',
      fileFilter(req, file, callback) {
        if (file.mimetype.match(/\/(jpg|jpeg|png)$/)) {
          file.filename = file.originalname;
          callback(null, true);
        } else {
          return callback(
            new Error('Only .png, .jpg, and .jpeg format allowed'),
            false,
          );
        }
      },
      limits: { fileSize: 1 * 1024 * 1024 },
    };
  }
}
