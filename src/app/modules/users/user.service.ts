import { User } from './user.model';
import { IUser } from './user.interface';
import config from '../../../config';
import { generateUserId } from './user.utils';

const createUser = async (user: IUser): Promise<IUser | null> => {
  // Auto Generated Incremental ID
  const id = await generateUserId();
  user.id = id;

  // default password
  if (!user.password) {
    user.password = config.default_student_password as string;
  }

  const createdUser = await User.create(user);
  if (!createUser) {
    throw new Error('Failed to create user');
  }
  return createdUser;
};

export const UserService = {
  createUser,
};
