import { Question } from '@/domain/entities/question'

export interface QuestionsRepository {
  create(Question: Question): Promise<void>
  findBySlug(slug: string): Promise<Question | null>
  deleteByQuestionId(id: string): Promise<Question | null>
}
