import { Question } from '@/domain/entities/question'

export interface QuestionsRepository {
  create(Question: Question): Promise<void>
}
